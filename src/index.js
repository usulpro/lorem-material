const Lorem = 'Material';

export default Lorem;

const lorems = require.context('./', true, /Material\w*.jsx/);
lorems.keys().forEach((filename) => {
    const ipsum = lorems(filename).default;
    const ipsumName = filename.replace(/^.\//, '').replace(/.jsx$/, '');
    module.exports[ipsumName] = ipsum;
});
