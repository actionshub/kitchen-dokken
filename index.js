const core = require('@actions/core');
const exec = require('@actions/exec')

async function main() {
  try {
    core.warning("::warning ::Github Action: actionshub/chef-install has migrated to the main branch as default, the master branch will be removed")

    // Get the variables we care about
    const os = core.getInput('os')
    const suite = core.getInput('suite')

    await exec.exec(`kitchen test ${suite}-${os}`)
  } catch (error){
    core.setFailed(error.message);
  }
}
main()
