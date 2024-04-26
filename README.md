#  Hair Records Management System

This is an open source project I am working on.

It's a system for managing customer's hair records for hair stylist friend of mine.

Feel free to contribute, or clone it for your own use.


Techstack
- Frontend & Backend Framework: NextJS
- Server Host: Vercel
- RDBMS: Postgresql
- DB Host: Neon
- Runtime env: Node.js lts version
- Version control: git

Extras:
- GUI to manage postgresql rdbms locally: PGAdmin4
      

Getting Started:

  Clone the Repository:

          git clone https://github.com/EngelbertTeh/Hair-Records-Management-System.git
    
  Install Dependencies:

          cd .\Hair-Records-Management-System\
          npm install

  Running in local host:
  - Create a .env.local file in the root of your project
  - Store this value
    
          NEXT_PUBLIC_VERCEL_ENV = development
          DATABASE_URL =  <Your database connection string>
    
   - Run development server

          npm run dev  // This will start the development server, typically accessible at http://localhost:3000 by default.

  Hosting in vercel and neon:
  - Create a vercel account
  - Push your own project to your own github repo
  - Create a project in vercel and connect it with your github repo

  - Create a neon account
  - In Vercel, in your project settings, create an environment variable
  - Store this value
    
          key: DATABASE_URL
          value: <The connection string neon provides you when you created a database>
    


# ERD

![QuickDBD-Free Diagram](https://github.com/EngelbertTeh/Hair-Records-Management-System/assets/116945412/a193daf7-a279-4880-92ea-14776748a9cd)








