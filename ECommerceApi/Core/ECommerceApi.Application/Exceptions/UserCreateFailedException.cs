﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Application.Exceptions
{
    public class UserCreateFailedException:Exception
    {
        public UserCreateFailedException():base("User not Created") {
        }

        public UserCreateFailedException(string? message):base(message)
        {
            
        }

        public UserCreateFailedException(string? message , Exception? innerException):base(message,innerException)
        {
            
        }



    }
}
