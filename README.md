# Free Email

A simple, secure and open-source email service project.

## Overview

This project aims to provide a free email solution that respects user privacy and data ownership. It is a turborepo with two workers:

- **Email Router**: A worker that routes emails to a database on the server
- **Pages Worker**: An interface to display and reply to received emails

## How to Run

### Prerequisites

- Node.js (v18 or later)
- npm (v8 or later)

### Installation

```bash
npm install
```

### Local Development

```bash
turbo dev
```

### Pre-Production

```bash
turbo start
```

## Production Deployment

```bash
turbo deploy
```
(see [DEPLOY.md](DEPLOY.md) for more details)
## Features (Planned)

- Email sending and receiving
- Inbox management
- Spam filtering
- Custom domains
- Email forwarding
- Simple and intuitive interface

## License

This project is licensed under the [Apache License 2.0](LICENSE) - see the LICENSE file for details.

### Why Apache 2.0?

The Apache 2.0 License provides several key benefits for this project:

- **Explicit Patent Grant**: Contributors grant a perpetual, irrevocable, royalty-free patent license covering their contributions
- **Patent Retaliation Clause**: Protects the project from patent litigation
- **Permissive Yet Protective**: Allows for free use, modification, and distribution while maintaining important protections
- **GPLv3-Compatible**: Compatible with GPL v3 projects
- **Community & Enterprise Trust**: Widely adopted by both open source communities and enterprises
