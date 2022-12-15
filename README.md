# Mongo Form Example

This project shows how to take a basic Next.js app and submit data to a
MongoDB backend with a form. It uses `react-form-hook` for the form
state, although `useState` could be used as well.

MongoDB is connected to using localhost in this example, with it running
in a docker container. The collection is built dynamically when first
requested.

## Development

You will need to have access to a Mongo database. Put the connection URI into
the `.env` file, replacing the default. If running this locally, you can use
docker:

```
docker run -p 27017:27017 mongo
```

### Run the App

```
yarn run
```

This will start the project. Go to http://localhost:3000 to see the form.
