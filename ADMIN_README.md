# Kasaragod Fashion - Admin Panel

A lightweight, internal admin panel for managing stores and products on the Kasaragod Fashion platform.

## Setup Instructions

### 1. Environment Configuration

Create a `.env.local` file in the project root with the following content:

```env
ADMIN_PASSWORD=your_secure_password_here
GEMINI_API_KEY=your_gemini_api_key_here
```

Replace `your_secure_password_here` with a strong password for admin access.

To get a Gemini API key:
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env.local` file

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Access Admin Panel

Navigate to: `http://localhost:3000/admin/login`

Login with the password you set in `.env.local`

## Admin Panel Features

### Dashboard
- Overview of total stores and products
- Active stores and available products count
- Recently added items list

### Store Management
- **List Stores**: View all stores with their details
- **Add Store**: Create new store listings
- **Edit Store**: Update store information
- **Delete Store**: Remove stores
- **Toggle Active/Inactive**: Control store visibility

**Store Fields:**
- Store Name
- Category (Men / Women / Premium)
- Location
- Store Image
- WhatsApp Number
- Short Description
- Active/Inactive status

### Product Management
- **List Products**: View all products with details
- **Add Product**: Create new product listings
- **Edit Product**: Update product information
- **Delete Product**: Remove products
- **Toggle Availability**: Mark products as available/unavailable
- **Homepage Display**: Control which products appear on homepage

**Product Fields:**
- Product Name
- Store (dropdown from active stores)
- Category (T-shirt, Shirt, Jeans, Hoodie, etc.)
- Occasion (College, Casual, Party, Formal, etc.)
- Product Image
- Available toggle
- Display on homepage toggle

## Data Storage

Currently using JSON files for data storage:
- `/data/stores.json` - Stores data
- `/data/products.json` - Products data

Images are uploaded to `/public/uploads/`

## Authentication

Simple password-based authentication using environment variables. Session expires after 24 hours.

## Security Notes

- Admin panel is protected by middleware
- Only accessible after login
- Session-based authentication with cookies
- All admin routes require authentication

## Future Enhancements

- Migrate to MongoDB for data persistence
- Add cloud storage for images (Cloudinary/AWS S3)
- Add more advanced analytics
- Implement role-based access control (if needed)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Cookie-based sessions
- **Storage**: JSON files (temporary)
