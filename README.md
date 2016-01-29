# LetsEncrypt Remote Challenge - Express Sample

In order to receive an SSL certificate from LetsEncrypt you must first publish a challenge in the domain for which your are requesting the certificate. Typically you'll use one of the tools to publish the challenge within your web server / web application, but this doesn't always work (especially in PaaS platforms).

This sample shows how you can proxy challenge requests with Express to a remote location (Amazon S3, Azure Blob Storage, ...).

## Usage

 1. Use Node 4 or higher
 2. Set `REMOTE_HOST` and `REMOTE_PATH` in the config.json file or as environment variables
 3. `node server` to start the server.

## Example

If I have my files in Blob Storage in the `challenges` container (with Public Blob access), I would configure it as follows:

 - `REMOTE_HOST`: `myaccount.blob.core.windows.net`
 - `REMOTE_PATH`: `/challenges`
