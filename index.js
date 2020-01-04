const core = require('@actions/core');
const exec = require('@actions/exec')

async function main() {
  try {
    // Get the variables we care about
    const os = core.getInput('os')
    const suite = core.getInput('suite')

    await exec.exec(`kitchen test ${suite}-${os}`)
  } catch (error){
    core.setFailed(error.message);
  }
}
main()
