using ECommerceApi.Application.Services;
using ECommerceApi.Infrastructure.StaticService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Globalization;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Infrastructure.Services
{
    public class FileService : IFileService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private static Object _obj;

        public FileService(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<bool> CopyFile(string path, IFormFile file)
        {
            try
            {
                using FileStream fileStream = new FileStream(path, FileMode.Create, FileAccess.Write, FileShare.None, 1024 * 1024, useAsync: false);
                await file.CopyToAsync(fileStream);
                await fileStream.FlushAsync();
                return true;
            }
            catch (Exception)
            {
                // todo log
            }
            return false;

        }

        private async Task<string> FileRenameAsync(string path, string fileName, int version = 1)
        {
            string newName = await Task.Run<string>(async() =>
             {
                 await Task.Delay(500);
                 string extension = Path.GetExtension(fileName);
                 var newFileName = String.Empty;

                 if (version == 1)
                 {
                     newFileName = fileName;
                 }
                 else
                     newFileName = $"{Path.GetFileNameWithoutExtension(fileName)}-{version}{extension}";

                 if (File.Exists($"{path}\\{newFileName}"))
                 {
                    return await FileRenameAsync(path, fileName, version + 1);
                 }
                 else
                 {
                     return newFileName;
                 }
             });

            return newName;
        }

        public async Task<List<(string fileName, string path)>> UploadAsync(string path, IFormFileCollection files)
        {
            var result = new List<(string fileName, string path)>();
            string uploadPath = Path.Combine(_webHostEnvironment.WebRootPath, path);
            if (!Directory.Exists(uploadPath))
                Directory.CreateDirectory(uploadPath);

            foreach (var file in files)
            {
                var newFileName = await FileRenameAsync(uploadPath, file.Name);
                var fullName = Path.Combine(uploadPath, newFileName);
                if (await CopyFile(fullName, file))
                {
                    result.Add((newFileName, fullName));
                }
            }



            if (result.Count == files.Count)
                return result;

            // todo dosyalrın sunucuya yuklenrken hata aldıgıda hata yonetiminin yapılması lazım.
            return null;
        }

    }
}
