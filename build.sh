#!/bin/sh
COS_SECRET_ID=$1
COS_SECRET_KEY=$2
COS_BUCKET_NAME=$3
COS_BUCKET_REGION=$4
FOLDER_PATH=$5
cd $FOLDER_PATH
rm -rf ./demo-frontend/
tar -xzvf build.tar.gz
coscmd config -a $COS_SECRET_ID -s $COS_SECRET_KEY -b $COS_BUCKET_NAME -r $COS_BUCKET_REGION
coscmd upload -r ./demo-frontend/ /
printf 'done.\n'