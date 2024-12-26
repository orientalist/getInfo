exports.handler = async (event) => {

    const path = event.path;
    
    const redirectUrl=combineUrl(path); 

    return {
        statusCode: 302,
        headers: {
            'Location': redirectUrl
        }
    };
};

const combineUrl=(path)=>{
    const basicUrl = "https://web-bs.surveycake.com/api/web/zh-TW/articles/";
    
    const pathParts = path.split('/');
    
    const remainingPath = pathParts[3];

    const redirectUrl = `${basicUrl}${remainingPath}`;
    
    return redirectUrl;
}