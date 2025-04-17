# Financial Dashboard Application

A Next.js application showcasing a financial dashboard with transaction management, expense tracking, and account settings.

## Features

- Interactive dashboard with expense statistics and balance history
- Transaction list with filtering capabilities
- Credit card management
- Quick transfer functionality
- Weekly activity charts
- User profile settings

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Chart.js for data visualization

## Prerequisites

- Node.js 18.17.0 or later

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd financial-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/src/app`: Next.js app router pages
- `/src/components`: Reusable UI components
  - `/dashboard`: Dashboard-specific components
  - `/settings`: User settings components
- `/public`: Static assets

## Assumptions

- Data is currently mocked and would be replaced with actual API integrations
- Authentication is not implemented but would be required in a production environment
- The application is responsive but optimized for desktop viewing
- Charts are currently populated with sample data

## Deployment

The application can be deployed on Vercel or any other hosting platform that supports Next.js applications.

```bash
npm run build
```

## License

[MIT](LICENSE)
