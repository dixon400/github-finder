# GitHub Finder

A modern React application for searching GitHub users and exploring their repositories. Built with React, Tailwind CSS, and the GitHub API.

## 🚀 Features

- **User Search**: Search for GitHub users by username
- **User Profiles**: View detailed user information including followers, following, and public repositories
- **Repository Listings**: Browse repositories of any GitHub user
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS and DaisyUI
- **Alert System**: Real-time notifications for user actions
- **Routing**: Multi-page navigation with React Router

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- GitHub Personal Access Token (optional, for higher API rate limits)
- Docker (for containerized deployment)

## 🛠️ Installation

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/dixon400/github-finder.git
cd github-finder
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```
REACT_APP_GITHUB_API=https://api.github.com
REACT_APP_GITHUB_TOKEN=your_github_token_here
```

To get a GitHub token:
- Go to [GitHub Settings > Developer Settings > Personal Access Tokens](https://github.com/settings/tokens)
- Generate a new token with `public_repo` scope
- Copy the token and add it to your `.env.local` file

4. Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm start` - Runs the app in development mode with hot reload
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner in interactive watch mode
- `npm eject` - Ejects from Create React App (one-way operation)

## 🐳 Docker Deployment

### Build the Docker Image

```bash
docker build -t github-finder .
```

### Run the Container

```bash
docker run -p 3000:3000 \
  -e REACT_APP_GITHUB_API=https://api.github.com \
  -e REACT_APP_GITHUB_TOKEN=your_github_token_here \
  github-finder
```

Or using Docker Compose:

```bash
docker-compose up
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, footer, navbar, alerts
│   ├── repos/           # Repository display components
│   └── users/           # User search and display components
├── context/
│   ├── alert/          # Alert state management
│   └── github/         # GitHub API state management
├── pages/              # Route pages (Home, User, About, NotFound)
├── App.js              # Main app component
├── config.js           # Environment configuration
└── index.js            # Entry point
```

## 🏗️ Architecture

The app uses React Context API for state management:
- **GithubContext**: Manages GitHub API calls and user data
- **AlertContext**: Manages notification alerts

### Key Technologies

- **React 17**: UI library
- **React Router v6**: Client-side routing
- **Axios**: HTTP client for API requests
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind
- **React Icons**: Icon library

## 🔑 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_GITHUB_API` | GitHub API base URL | `https://api.github.com` |
| `REACT_APP_GITHUB_TOKEN` | GitHub personal access token | (optional) |

## 📖 Pages

- **Home** (`/`) - Search for GitHub users
- **User** (`/user/:login`) - View detailed user profile and repositories
- **About** (`/about`) - Information about the app
- **Not Found** (`/notfound`) - 404 error page

## 🚀 Deployment

### Vercel

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Add environment variables in Vercel settings
3. Deploy automatically on push

### Other Platforms

1. Build the app: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Configure environment variables on the hosting platform

## 📝 API Rate Limits

GitHub API has rate limits:
- **Unauthenticated**: 60 requests per hour
- **Authenticated**: 5,000 requests per hour

For better rate limits, configure a personal access token in `.env.local`.

## 🐛 Troubleshooting

**API Rate Limit Exceeded**
- Add a GitHub Personal Access Token to `.env.local`
- Wait for the rate limit to reset (1 hour)

**Blank Page on Load**
- Check browser console for errors
- Verify environment variables are set correctly
- Ensure GitHub API is accessible

**Port 3000 Already in Use**
```bash
# Kill process on port 3000 (Windows PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🔗 Resources

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
