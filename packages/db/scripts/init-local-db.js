#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get command line arguments
const args = process.argv.slice(2);
const workerName = args[0];

// Define available workers
const availableWorkers = ['dashboard', 'router'];

// Function to initialize a specific worker
function initializeWorker(worker) {
  // Determine the paths
  const schemaPath = path.join(__dirname, '../schema/schema.sql');
  const workerDir = path.join(__dirname, '../../../workers', worker);

  // Check if wrangler.toml or wrangler.jsonc exists and read DB name
  let dbName = 'email_storage';
  try {
    // First try wrangler.toml
    if (fs.existsSync(path.join(workerDir, 'wrangler.toml'))) {
      const tomlContent = fs.readFileSync(path.join(workerDir, 'wrangler.toml'), 'utf-8');
      const dbNameMatch = tomlContent.match(/database_name\s*=\s*"([^"]+)"/);
      if (dbNameMatch && dbNameMatch[1]) {
        dbName = dbNameMatch[1];
      }
    }
    // Then try wrangler.jsonc
    else if (fs.existsSync(path.join(workerDir, 'wrangler.jsonc'))) {
      const jsoncContent = fs.readFileSync(path.join(workerDir, 'wrangler.jsonc'), 'utf-8');
      const dbNameMatch = jsoncContent.match(/"database_name":\s*"([^"]+)"/);
      if (dbNameMatch && dbNameMatch[1]) {
        dbName = dbNameMatch[1];
      }
    }
  } catch (error) {
    console.warn(`Could not read wrangler config for ${worker}, using default DB name:`, dbName);
  }

  console.log(`Initializing local D1 database "${dbName}" for ${worker} worker...`);

  try {
    // Execute wrangler command to initialize the database
    const command = `cd ${workerDir} && npx wrangler d1 execute ${dbName} --local --file=${schemaPath}`;
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
    console.log(`Successfully initialized ${dbName} database for ${worker}`);
    return true;
  } catch (error) {
    console.error(`Failed to initialize database for ${worker}: ${error.message}`);
    return false;
  }
}

// Main execution
if (!workerName) {
  console.log('No worker specified, initializing all workers...');
  let success = true;

  // Initialize each available worker
  for (const worker of availableWorkers) {
    const result = initializeWorker(worker);
    if (!result) {
      success = false;
    }
  }

  // Exit with appropriate status code based on success
  process.exit(success ? 0 : 1);
} else {
  // Single worker initialization with validation
  if (!availableWorkers.includes(workerName)) {
    console.error('Worker must be either "dashboard" or "router"');
    process.exit(1);
  }

  const success = initializeWorker(workerName);
  process.exit(success ? 0 : 1);
}
