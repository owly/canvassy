(function() {
  define(function() {
    var mimeClass;

    mimeClass = function(contentType) {
      return mimeClass.mimeClasses[contentType] || 'file';
    };
    mimeClass.mimeClasses = {
      "video/mp4": "video",
      "application/x-rar-compressed": "zip",
      "application/vnd.oasis.opendocument.spreadsheet": "xls",
      "application/x-docx": "doc",
      "application/x-shockwave-flash": "flash",
      "audio/x-mpegurl": "audio",
      "image/png": "image",
      "text/xml": "code",
      "video/x-ms-asf": "video",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xls",
      "text/html": "html",
      "video/x-msvideo": "video",
      "audio/x-pn-realaudio": "audio",
      "application/x-zip-compressed": "zip",
      "text/css": "code",
      "video/x-sgi-movie": "video",
      "audio/x-aiff": "audio",
      "application/zip": "zip",
      "application/xml": "code",
      "application/x-zip": "zip",
      "text/rtf": "doc",
      "text": "text",
      "video/mpeg": "video",
      "video/quicktime": "video",
      "audio/3gpp": "audio",
      "audio/mid": "audio",
      "application/x-rar": "zip",
      "image/x-psd": "image",
      "application/vnd.ms-excel": "xls",
      "application/msword": "doc",
      "video/x-la-asf": "video",
      "image/gif": "image",
      "application/rtf": "doc",
      "video/3gpp": "video",
      "image/pjpeg": "image",
      "image/jpeg": "image",
      "application/vnd.oasis.opendocument.text": "doc",
      "audio/x-wav": "audio",
      "audio/basic": "audio",
      "audio/mpeg": "audio",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": "ppt",
      "application/vnd.ms-powerpoint": "ppt",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "doc",
      "application/pdf": "pdf",
      "text/plain": "text",
      "text/x-csharp": "code"
    };
    return mimeClass;
  });

}).call(this);
