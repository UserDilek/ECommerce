using ECommerceApi.Application.ViewModels;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Application.Validators.Products
{
    public class CreateProductValidator:AbstractValidator<WM_Create_Product>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .WithMessage("please enter a name")
                .MaximumLength(150)
                .MinimumLength(5)
                .WithMessage("please enter a valid name");

            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                .WithMessage("PLease enter a stock")
                .Must(s => s >= 0)
                .WithMessage("please enter a number above 0");

            RuleFor(p => p.Price)
                .NotEmpty()
                .NotNull()
                .WithMessage("please enter a price")
                .Must(s => s >= 0)
                .WithMessage("please enter a prica above 0");
        }
    }
}
