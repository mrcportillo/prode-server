#!/bin/bash
set -e

export NODE_ENV=$APP_ENV

echo "Service Name $SERVICE_NAME"
echo "ENV $APP_ENV"

# If your project needs the config values to be loaded into environment variables, set
# `CONFIG_INTO_ENV_VARIABLES` to `true`, if set to `false` it will write the server config on
# the config/environment folder.
CONFIG_INTO_ENV_VARIABLES=false
LOG_TO_FILES=true
# If `BACKUP_OLD_LOG_FILES` is set to `true` it will backup the existing log file and 
# appending the current date to his name, if set to `false` it will use the same file.
BACKUP_OLD_LOG_FILES=false

# You should normally only need to change values above this line
echo "run.sh running in $APP_ENV"
echo "with: CONFIG_INTO_ENV_VARIABLES=$CONFIG_INTO_ENV_VARIABLES, LOG_TO_FILES=$LOG_TO_FILES, BACKUP_OLD_LOG_FILES=$BACKUP_OLD_LOG_FILES."

CONFIGPATH="."
if [ ! -f "$CONFIGPATH/package.json" ]; then    
    die "Cannot find package.json. This script must be running on the project root folder."
fi


if [[ "$APP_ENV" == "test" ]]; then
    
    cd /var/www/$SERVICE_NAME
    # Run the linter 
    npm run lint
    # Run the tests
    npm run test
fi

if [[ "$APP_ENV" == "local" ]]; then
    # Start our Node.js RESTful API service, do not redirect
    cd /var/www/$SERVICE_NAME
    echo "Finished processing run.sh, about to start node server"
    node src/index.js --use-strict --name=$SERVICE_NAME
fi

if [[ "$APP_ENV" == "local-dev" ]]; then
    # In some networked environments (such as a container running nodemon reading across a mounted drive), you will need to use the legacyWatch: true which enabled Chokidar's polling.
    cd /var/www/$SERVICE_NAME
    echo "Finished processing run.sh, about to start nodemon watcher"
    npm start
fi