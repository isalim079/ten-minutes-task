# 10 Minute School Product Page - Job Task

A React TypeScript application built for 10 Minute School's Frontend Engineer (Level 1) Assessment. This project replicates the IELTS Course product page with modern web development practices using TypeScript, React, and Tailwind CSS.

## � Live Demo
**[View Live Application →](https://tenminsc-task.vercel.app/)**

## �📋 Job Task Description

**Position**: Frontend Engineer (Level 1) Assessment  
**Deadline**: July 28th, 11:59 PM  
**Reference Page**: [IELTS Course by Munzereen Shahid](https://10minuteschool.com/product/ielts-course/)

### Task Requirements
Design a product page like 'IELTS Course by Munzereen Shahid' with specific sections using React/NextJS, TailwindCSS, and TypeScript.

### API Integration
- **Endpoint**: `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`
- **Method**: GET
- **Query Params**: `lang=en/bn` (Language preference)
- **Headers**: `X-TENMS-SOURCE-PLATFORM: web` (For SEO data)

**CURL Example**:
```bash
curl --request GET \
  --url 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en' \
  --header 'X-TENMS-SOURCE-PLATFORM: web' \
  --header 'accept: application/json'
```

## ✅ Implemented Features

### Core Requirements (Must Have)
- ✅ **Title**: Dynamic product title rendering
- ✅ **Description**: HTML content parsing and display
- ✅ **Course Instructors**: From sections array (type=instructors)
- 🔄 **Product Trailer**: YouTube player integration (from media data)
- ✅ **Default Price**: Fixed at 1000 BDT
- ✅ **CTA Text**: Dynamic call-to-action from API
- 🔄 **Localization**: English/Bengali language support
- 🔄 **Server-side Rendering (SSR)**: NextJS implementation

### Good to Have Features
- 🔄 **Course Layout**: From sections (type=features)
- 🔄 **Learning Outcomes**: From sections (type=pointers)
- 🔄 **Exclusive Features**: From sections (type=feature_explanations)
- 🔄 **Course Details**: From sections (type=about)
- ✅ **Checklist**: Product highlights and features
- 🔄 **ISR**: Incremental Static Regeneration with NextJS
- ✅ **SEO**: Meta tags and structured data

## 🎯 Key Focus Areas

1. **Design and Implementation**: Pixel-perfect recreation of the original page
2. **State and Props Management**: Efficient data flow and component communication
3. **TypeScript**: Complete type safety with complex nested interfaces
4. **Server-side Rendering**: SEO-optimized page rendering
5. **Code Splitting**: Reusable and modular components

## 🚀 Technical Implementation

### Current Status
- **Framework**: React 19.1.0 with TypeScript (Vite setup)
- **Styling**: Tailwind CSS 4.1.11
- **API Integration**: Complete with proper error handling
- **Type Definitions**: Comprehensive interfaces for all API responses
- **Component Structure**: Modular and reusable components

### Planned Migration to NextJS
The current implementation uses Vite + React. Migration to NextJS is planned for:
- Server-side rendering (SSR)
- Incremental Static Regeneration (ISR)
- Better SEO optimization
- Improved performance

## 📊 Assessment Criteria Met

| Criteria | Status | Implementation |
|----------|--------|----------------|
| React/NextJS | 🔄 | Currently React + Vite, NextJS migration planned |
| TypeScript | ✅ | Complete type safety throughout |
| TailwindCSS | ✅ | Modern responsive design |
| API Integration | ✅ | Proper error handling and data fetching |
| Component Reusability | ✅ | Modular component architecture |
| State Management | ✅ | React hooks with proper prop drilling |
| Code Quality | ✅ | ESLint + Prettier configuration |

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.0.4
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm/yarn

## 📁 Project Structure

```
src/
├── api/
│   └── getProductPageData.ts    # API data fetching logic
├── assets/
│   └── react.svg                # Static assets
├── pages/
│   ├── Products/
│   │   ├── ProductPage.tsx      # Main product page component
│   │   └── LeftLayout/
│   │       ├── Instructor.tsx   # Instructor information component
│   │       └── TitleDescription.tsx # Product title and description
│   └── Shared/
│       └── Header/
│           └── Header.tsx       # Shared header component
├── types/
│   └── product.d.ts            # TypeScript type definitions
├── App.tsx                     # Main app component
├── main.tsx                    # Application entry point
└── index.css                   # Global styles
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint for code quality |
| `npm run preview` | Preview production build |

## 🏗️ Key Components

### ProductPage
Main component that fetches and displays product data with:
- Product title and description
- Instructor information
- Responsive grid layout

### Type Definitions
Comprehensive TypeScript interfaces for:
- `ProductData`: Main product structure
- `Section`: Content sections with dynamic values
- `Instructor`: Course instructor information
- `SEO`: Search engine optimization data
- `Media`: Product media assets

### API Integration
- Structured data fetching with error handling
- Language support (English/Bengali)
- Loading states and error management

## 🎯 Job Task Objectives

This project demonstrates proficiency in:

1. **TypeScript Proficiency**: Complete type safety with complex nested interfaces matching the API response structure
2. **React Best Practices**: Modern hooks, component composition, and efficient state management
3. **API Integration**: Proper data fetching, error handling, and type alignment with real-world APIs
4. **Responsive Design**: Mobile-first approach with Tailwind CSS following modern design principles
5. **Code Organization**: Clean file structure, separation of concerns, and reusable components
6. **Modern Tooling**: Vite build system, ESLint, Prettier integration for optimal developer experience

## 📝 Submission Details

- **Repository**: [GitHub - ten-minutes-task](https://github.com/isalim079/ten-minutes-task)
- **Live Demo**: [https://tenminsc-task.vercel.app/](https://tenminsc-task.vercel.app/)
- **Branch**: main
- **Deadline**: July 28th, 11:59 PM
- **Build Status**: Production-ready build available
- **Deployment**: Vercel (Automatic deployment from GitHub)
- **Technologies**: React, TypeScript, Tailwind CSS, Vite

### Assessment Requirements Met
- ✅ React/TypeScript implementation
- ✅ TailwindCSS for styling
- ✅ GitHub repository with build version
- 🔄 Dockerfile (optional, in progress)
- ✅ Complete by deadline

## 🔍 Technical Highlights

- **Type-Safe API Responses**: All API responses are properly typed
- **Component Reusability**: Modular component design
- **Error Handling**: Comprehensive error states and loading indicators
- **Performance**: Optimized with Vite and modern React patterns
- **Code Quality**: ESLint configuration with React hooks rules

## 🤝 Development Guidelines

- Follow TypeScript strict mode
- Use type-only imports for interfaces
- Implement proper error boundaries
- Maintain responsive design principles
- Keep components small and focused

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

---

## 📄 Official Job Task Requirements

### Features Required

**Must Have:**
- Title (product title from API)
- Description (HTML string from API)
- Course instructors (sections array, type=instructors)
- Product trailer (YouTube player from media data)
- Price display (default: 1000 BDT)
- CTA text (from cta_text API field)
- Localization (en/bn language support)
- Server-side rendering (SSR)

**Good to Have:**
- How the course is laid out (sections, type=features)
- What you will learn (sections, type=pointers)
- Course Exclusive Feature (sections, type=feature_explanations)
- Course details (sections, type=about)
- Check List (from checklist API field)
- Incremental static generation (ISR) using NextJS
- SEO optimization (using API SEO data)

### Technical Requirements
- React/NextJS with TypeScript
- TailwindCSS for styling
- Deadline: July 28th, 11:59 PM
- GitHub submission with build version
- Dockerfile (optional)

### Key Assessment Focus
1. Design and implementation quality
2. State and Props management
3. TypeScript usage and type safety
4. Server-side Rendering implementation
5. Code splitting and component reusability

**Note**: This is a Frontend Engineer (Level 1) assessment project for 10 Minute School, demonstrating modern React development skills and adherence to professional coding standards.