<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project README</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background: #f4f4f9;
      color: #333;
    }
    header {
      text-align: center;
      background: linear-gradient(135deg, #4c8bf5, #2a65d0);
      color: #fff;
      padding: 2rem;
    }
    header h1 {
      font-size: 3rem;
      margin: 0;
    }
    header p {
      font-size: 1.2rem;
      margin: 0;
      opacity: 0.9;
    }
    main {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    section {
      margin-bottom: 2rem;
    }
    section h2 {
      border-bottom: 2px solid #4c8bf5;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      color: #2a65d0;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul li {
      margin: 0.5rem 0;
      padding-left: 1.5rem;
      text-indent: -1.5rem;
    }
    ul li::before {
      content: "➤";
      color: #4c8bf5;
      padding-right: 0.5rem;
    }
    code {
      background: #f4f4f9;
      color: #2a65d0;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: monospace;
    }
    .btn {
      display: inline-block;
      background: #4c8bf5;
      color: #fff;
      padding: 0.6rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      transition: background 0.3s;
    }
    .btn:hover {
      background: #2a65d0;
    }
    footer {
      text-align: center;
      margin-top: 3rem;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>🔥 List Status Manager</h1>
    <p>An elegant app to manage your tasks with drag-and-drop magic.</p>
  </header>
  <main>
    <section>
      <h2>✨ Features</h2>
      <ul>
        <li>Drag-and-drop functionality using <code>@hello-pangea/dnd</code>.</li>
        <li>Seamless task organization with Firebase integration.</li>
        <li>Interactive UI built with Next.js and Tailwind CSS.</li>
        <li>Real-time updates to keep you in sync.</li>
      </ul>
    </section>
    <section>
      <h2>🚀 Getting Started</h2>
      <p>Follow these steps to set up the project:</p>
      <ul>
        <li>Clone the repository: <code>git clone https://github.com/your-repo.git</code></li>
        <li>Navigate to the project folder: <code>cd list-status-manager</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Start the development server: <code>npm run dev</code></li>
      </ul>
      <a href="https://nextjs.org/docs/getting-started" class="btn">Read Next.js Docs</a>
    </section>
    <section>
      <h2>🛠️ Technologies Used</h2>
      <ul>
        <li><strong>Framework:</strong> Next.js</li>
        <li><strong>Styling:</strong> Tailwind CSS</li>
        <li><strong>State Management:</strong> React Hooks</li>
        <li><strong>Database:</strong> Firebase Firestore</li>
        <li><strong>Drag and Drop:</strong> @hello-pangea/dnd</li>
      </ul>
    </section>
    <section>
      <h2>📦 Deployment</h2>
      <p>The app can be deployed using any Vercel-compatible hosting service:</p>
      <ul>
        <li>Run <code>npm run build</code> to create a production build.</li>
        <li>Deploy the <code>.next</code> folder to your hosting provider.</li>
      </ul>
    </section>
    <section>
      <h2>🤝 Contributing</h2>
      <p>We welcome contributions! Please follow these steps:</p>
      <ul>
        <li>Fork the repository.</li>
        <li>Create a new branch: <code>git checkout -b feature/your-feature</code></li>
        <li>Commit your changes: <code>git commit -m "Add your feature"</code></li>
        <li>Push to the branch: <code>git push origin feature/your-feature</code></li>
        <li>Open a Pull Request.</li>
      </ul>
    </section>
    <section>
      <h2>🌟 License</h2>
      <p>This project is licensed under the <strong>MIT License</strong>.</p>
    </section>
  </main>
  <footer>
    <p>Built with ❤️ by <strong>Your Name</strong>.</p>
    <p>Follow me on <a href="https://github.com/your-profile" target="_blank">GitHub</a>.</p>
  </footer>
</body>
</html>
