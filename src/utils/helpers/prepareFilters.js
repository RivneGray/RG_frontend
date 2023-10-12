export const prepareFilters = (objFromClient, objFromServer) => {
    const objResult = {};
    for (let name in objFromClient) {
        objResult[name] = objFromServer[name];
        objResult[name].isScrolled = objFromClient[name].isScrolled;
    }

    return objResult
}