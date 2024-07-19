### To run challenges using Node.js, follow these steps:

1. Make sure you have `Node.js` installed on your system. You can download it from the [official Node.js website](https://nodejs.org/en/download/package-manager/current).
2. Clone the repository containing the challenges to your local machine and `cd` in.
3. Run the command `node challenge-a.js` to execute challenge `A` it should build the objects data and store a file at `storage/output.txt`.
4. Once challenge `A` is completed, run the command `node challenge-b.js` to execute challenge `B` which will print objects file content in terminal.
5. Now for challenge `C` you can build the docker image
```bash
docker build -t kasagi-challenge .  
```
Once image is build you can run the container and it will write `objects-output` in repository root folder. 
```bash
docker run -v $(pwd):/usr/src/app kasagi-challenge
```