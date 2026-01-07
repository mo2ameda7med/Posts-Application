# Post Management App

A modern React application for creating, viewing, and managing blog posts with search and filter functionality. Built with TypeScript, Vite, and powered by the JSONPlaceholder API.

## Features

- 📝 **Create Posts**: Add new posts with title, body, and author selection
- 🔍 **Search Posts**: Search posts by title or body content
- 👤 **Filter by Author**: Filter posts by specific authors
- 📄 **Pagination**: Navigate through posts with next/previous buttons
- ✅ **Form Validation**: Built-in validation using Zod schema
- 🎨 **Modern UI**: Clean and responsive interface with Tailwind CSS
- 🔔 **Toast Notifications**: Real-time feedback for user actions
- ⚡ **Error Handling**: Comprehensive error handling and validation

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Routing**: React Router
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **API**: JSONPlaceholder

## Project Structure

```
src/
├── components/
│   ├── Add-post/          # Create new post component
│   ├── Header/            # App header
│   ├── Home-page/         # Main page with search & filter
│   ├── Post-details/      # Individual post details
│   ├── Posts-list/        # Posts list with pagination
│   └── ui/                # Reusable UI components (Button, Input, etc.)
├── lib/
│   └── utils.ts           # Utility functions
├── schema/
│   └── index.ts           # Zod schemas for validation
├── types/
│   └── index.ts           # TypeScript type definitions
├── App.tsx                # Main app component
└── main.tsx               # Entry point
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

Build for production:

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Key Features Explained

### Create Posts

- Navigate to the "Create a New Post" page
- Enter post title and body (minimum length validation)
- Select an author from the dropdown
- Submit to create the post
- Validation prevents empty or space-only submissions
- Whitespace is automatically trimmed from input

### Search & Filter

- Use the search input to find posts by title or body content
- Filter posts by author using the author dropdown
- Combined search and filter work together
- "No posts found" message displays when no results match

### Pagination

- Posts are paginated with 10 posts per page
- Use Previous/Next buttons to navigate
- Buttons are disabled at boundaries (first/last page)

## Data Validation

The app uses Zod schemas for validation:

- **Title**: Required, minimum 3 characters
- **Body**: Required, minimum 10 characters
- **Author**: Required field

## Error Handling

- Type-safe error handling in API calls
- User-friendly error messages
- Toast notifications for all actions
- Form validation errors displayed inline
- Proper validation for empty or space-only input

## API Integration

The app uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API:

- `GET /posts?_page={page}&_limit=10` - Fetch paginated posts
- `POST /posts` - Create new posts

## Browser Support

Works on all modern browsers that support ES2020+

## License

This project is open source and available under the MIT License.
