# Oleville Voting
Backend for the Oleville Voting System, used to host all SGA-Related elections and referendums.

Designed and implemented to meet the needs of rank-choice and first-past-the post voting systems.

## Technologies

- Express
- Sequelize
- MySQL
- Google OAuth
- Docker

## Contributing

Contributions from inside and outside the St. Olaf College community are welcome. All contributers not currently members of the Oleville Development Team should fork the project and then make a pull request with changes.

Steps to contribute:

1. Clone repository.
2. Initialize MySQL databases used by the project using our scripts: `mysql < script/create_databases.sql`
3. Get information from Google required for authentication flow. This can be accomplished by visiting the Google Developer Console. Note that you may have to modify the code slightly if you do not have access to an email address on the `@stolaf.edu` domain.
4. Input information from Google into a file `config.js`. A template can be found in `config.sample.js`.
5. Install node packages.
6. Run migrations (`npm run db:migrate:up`)

Happy hacking!

## Docker Setup Instructions

In production, we run this api within a Docker container. This is orchestrated by `docker-compose` because there is no need to run this in a cluster. (However, a k8s manifest would be appreciated.)

Here are the steps to get this thing up-and-running from the beginning:

1. Install Docker. Figure out where that is for your specific platform, and go ahead and do it. We just need to have container-to-container and container-to-outside networking both accessible to us.
2. Copy `config.sample.js` to `config.js`, and add the Google OAuth Client ID and Client Secrets to the right place.
3. Copy `env.sample.js` to `env.js` and change the `dbPassword` to the password you want to use for the root account on your database.
4. Copy `config/config.sample.json` to `config/config.json` and set the credentials.  Also, change the database hostname to `db`, so that Sequelize tries to talk to the right hostname.
5. Run `script/up`.
   - This script basically just calls `docker-compose up`.  All of the magic preventing the API from starting before the server lives in `bin/docker-entrypoint.sh`—we check and see if we can `nc` on `db:3306` prior to allowing the server to start.
   - You can watch the logs for your app via `docker-compose logs -f`.
6. Enjoy!

