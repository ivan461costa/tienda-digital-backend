{
  "name": "tienda-digital-backend",
  "version": "1.0.0",
  "description": "Backend para tienda digital con pagos automáticos",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "ecommerce",
    "stripe",
    "supabase",
    "nodejs"
  ],
  "author": "Tu Nombre",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "stripe": "^14.12.0",
    "@supabase/supabase-js": "^2.39.0",
    "cors": "^2.8.5",
    "nodemailer": "^6.9.7"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
