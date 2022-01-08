

# Introduction

React antd admin starter based on `React` and `Ant Design` Background management system template.It built a typical business model such as user login / logout, dynamic routing, permission check, user management, can help you quickly build a prototype of enterprise-level background product, which is the choice for your lively living.


# Features

```bash
- Login / logout

- ASD
  -Page permission
  - Routing permissions

- Global function
  - Dynamic sidebar (support multi-level routing nested)
  Dynamic breadcrumbs
  - Local / backend MOCK data
  - Screenfull full screen
  - Adaptive shrink sidebar

- editor
  - Welfare text
  - Markdown

- Excel
  -Export Excel
  - Import Excel
  - Front-end visualization Excel

- Zip
  - Export ZIP

- Error page
  - 404

- Assembly
  - Drag and drop list

- sheet
- Dashboard
- Guide pages
- echarts chart
- Clipboard
```

# Directory Structure

```bash
├─ public                     # Static resource
│   ├─ favicon.ico            # Favicon icon
│   └─ index.html             # HTML template
├─ src                        # Project source code
│   ├─ api                    # All requests
│   ├─ assets                 # Picture font and other static resources
│   ├─ components             # Global public components
│   ├─ config                 # Global configuration
│   │   ├─ menuConfig.js      # Navigation menu configuration
│   │   └─ routeMap.js        # Routing configuration
│   ├─ lib                    # Third-party library on-demand
│   ├─ mock                   # Project MOCK simulation data
│   ├─ store                  # Global Store Management
│   ├─ styles                 # Global style
│   ├─ utils                  # Global utility method
│   ├─ views                  # Views all pages
│   ├─ App.js                 # Entry page
│   ├─ defaultSettings.js     # Global default configuration
│   └─index.js                # Source entry
├── .env.development          # Development environment variable configuration
├── .env.production           # Production environment variable configuration
├── config-overrides.js       # WEBPACK custom configuration for CRA
├── deploy.sh                 # CI deployment script
├── .travis.yml               # Automated CI configuration
└── package.json              # package.json
```

# Install

```shell
# Clone project
git clone https://github.com/fingersfun/react-antd-admin-starter.git

# Enter project catalog
cd react-antd-admin-starter

# Installation dependence
npm install

# Switch Taobao source, solve the problem of slow download speed of npm
npm install --registry=https://registry.npm.taobao.org

# Start service
npm start
```

Automatically open your browser access after startup [http://localhost:3000](http://localhost:3000)， You see the following page on behalf of the operation.


Next you can modify the code for business development.

