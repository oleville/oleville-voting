# Oleville Voting
Backend for the Oleville Voting System, used to host all SGA-Related elections and referendums.

Designed and implemented to meet the needs of rank-choice and first-past-the post voting systems.

## Technologies

- Express
- Sequelize
- MySQL
- Google OAuth

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
