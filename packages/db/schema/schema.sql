-- Create table to store email logs
CREATE TABLE IF NOT EXISTS email_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  from_email TEXT NOT NULL,
  to_email TEXT NOT NULL,
  subject TEXT,
  timestamp TEXT NOT NULL,
  allowed INTEGER NOT NULL
);

-- Create table to store allowed senders
CREATE TABLE IF NOT EXISTS allowed_senders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  added_at TEXT NOT NULL
);

-- Add some initial allowed senders for testing
INSERT OR IGNORE INTO allowed_senders (email, added_at) VALUES 
  ('friend@example.com', datetime('now')),
  ('coworker@example.com', datetime('now'));
