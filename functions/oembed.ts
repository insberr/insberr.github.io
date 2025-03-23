
export const onRequest: PagesFunction<Env> = async (context) => {
    const url = new URL(context.request.url);
    const paramValue = url.searchParams.get('url'); // Get the value of 'myParameter'
    console.log(paramValue);

    return new Response(JSON.stringify(
        {
            "version": "1.0",
            "type": "video",
            "provider_name": "insberr.com",
            "provider_url": "https://insberr.com/",
            "width": 425,
            "height": 344,
            "title": "PostView Title",
            "author_name": "Insberr",
            "author_url": "https://insberr.com/",
            "html": "<object width=\"425\" height=\"344\">\
                <param name=\"movie\" value=\"https://www.youtube.com/v/M3r2XDceM6A&fs=1\"></param>\
                <param name=\"allowFullScreen\" value=\"true\"></param>\
                <param name=\"allowscriptaccess\" value=\"always\"></param>\
                <embed src=\"https://www.youtube.com/v/M3r2XDceM6A&fs=1\"\
                type=\"application/x-shockwave-flash\" width=\"425\" height=\"344\"\
                allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed>\
                </object>\
            ",
        }
    ));
}
