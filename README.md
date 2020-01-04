# chef-install

[![CI State](https://github.com/actionshub/kitchen-dokken/workflows/release/badge.svg)](https://github.com/actionshub/kitchen-dokken)

A Github Action to run Kitchen Dokken on your cookbooks

Note you will need to accept the Chef license, you can find more information at <https://docs.chef.io/chef_license.html>

## Usage

```yaml
name: kitchen

on: [pull_request]

jobs:
  dokken:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: ['debian-8', 'debian-9', 'centos-7', 'fedora-latest', 'ubuntu-1604', 'ubuntu-1804']
        suite: ['default']
      fail-fast: false

    steps:
    - name: Check out code
      uses: actions/checkout@master
    - name: Install Chef
      uses: actionshub/chef-install@master
    - name: Dokken
      uses: actionshub/kitchen-dokken@creation
      env:
        suite: ${{ matrix.suite }}
        os: ${{ matrix.os }}
        CHEF_LICENSE: accept-no-persist
        KITCHEN_LOCAL_YAML: kitchen.dokken.yml
 ```

## Envrionment Variables

We support the following Environment Variables

|name| default| description|
|--- |------- |----------- |
|suite|  | the name of the suite to run |
|os |  | Which os to run on |
