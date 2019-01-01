var argvs = process.argv.slice(2);
switch (argvs[0]) {
    case 'init':
        console.log('init complete');
        break;
    case 'install':
        let inStallPackageName = argvs[1];
        console.log('install success');
        break;
    default:
        console.log('init');
        console.log('install');
}