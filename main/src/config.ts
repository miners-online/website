export interface NavLink {
    name: string;
    url: string;
    newtab?: boolean;
}

export interface ModPack {
    name: string;
    url: string;
}

export interface Config {
    siteName: string;
    baseurl: string;
    siteIcon: string;
    navLinks: NavLink[];
    serverIP: string;
    modPack?: ModPack;
}

export const config: Config = {
    siteName: "Miners Online",
    baseurl: "",
    siteIcon: "/favicon.svg",
    navLinks: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
        { name: "Contact", url: "/contact" },
        { name: "GitHub", url: "https://github.com/miners-online", newtab: true },
    ],
    serverIP: "minersonline.uk",
    modPack: {
        name: "Miners Online (Creative S3) 1.0.1",
        url: "https://cdn.modrinth.com/data/5HDNFYqy/versions/LpK5jGN3/Miners%20Online%20%28Creative%20S3%29%201.0.1.mrpack",
    },
};
