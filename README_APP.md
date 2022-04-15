This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/*`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Template Usage

```bash
yarn
husky install
```

Or before

```bash
yarn add -D @next/eslint-plugin-next @types/node @types/react @typescript-eslint/eslint-plugin @typescript-eslint/parser autoprefixer eslint eslint-config-next eslint-config-prettier eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prefer-arrow eslint-plugin-prettier husky postcss prettier tailwindcss typescript
```

```bash
yarn add next react react-dom
```

## WebStorm

- Preferences | Languages & Frameworks | Node.js
    - Setup `Node interpreter`
    - Setup `Package manager`
    - If you want turn on `Coding Assistance for Node.js`
- Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint
    - Setup `Automatic ESLint configuration`, if something not work, specify path
    - Check `Run Eslint --fix on save`
- Preferences | Languages & Frameworks | JavaScript | Prettier
    - Check `'On Reformat' Code Action`
    - Check `On Save`
