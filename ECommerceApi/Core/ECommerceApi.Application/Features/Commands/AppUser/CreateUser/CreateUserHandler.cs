using ECommerceApi.Application.Exceptions;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace ECommerceApi.Application.Features.Commands.AppUser.CreateUser
{
    public class CreateUserHandler : IRequestHandler<CreateUserRequest, CreateUserResponse>
    {
        private readonly UserManager<ECommerceApi.Domain.Entities.Identity.AppUser> _userManager;
        public CreateUserHandler(UserManager<ECommerceApi.Domain.Entities.Identity.AppUser> userManager)
        {
            _userManager = userManager;
        }
        public async Task<CreateUserResponse> Handle(CreateUserRequest request, CancellationToken cancellationToken)
        {

            var result = await _userManager.CreateAsync(new Domain.Entities.Identity.AppUser()
            {
                Id = Guid.NewGuid().ToString(),
                FullName = request.FullName,
                Email = request.Email,
                UserName = request.UserName,
            }, request.Password);

            if (result.Succeeded)
            {
                return new()
                {
                    Succedded = true,
                    Message = "User saved"
                };
            }
            else
            {
                return new()
                {
                    Succedded = false,
                    Message = "User not saved"
                };

            }



        }
    }
}
