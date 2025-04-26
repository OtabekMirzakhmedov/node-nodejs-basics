import readline  from 'readline';

const parseEnv = () => {
    const envVars = process.env;
    const prefix = 'RSS_';
    const rssVars = Object.keys(envVars).filter(key => key.startsWith(prefix));
    const rssValues = rssVars.map(key => `${key}=${envVars[key]}`);
    const rssString = rssValues.join('; ');
    console.log(rssString);
};

parseEnv();