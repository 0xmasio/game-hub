const getCroppedImageUrl = (url: string) => {
    if (!url) return '';
    
    const index = url.indexOf('media/') + 'media/'.length;
    const new_url = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
    // console.log(new_url)
    return new_url;
};

export default getCroppedImageUrl;
