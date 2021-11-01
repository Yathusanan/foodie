using API.Dtos;
using AutoMapper;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                                .ForMember(d => d.ProductBrand, e => e.MapFrom(s => s.ProductBrand.Name))
                                .ForMember(d => d.ProductType, e => e.MapFrom(s => s.ProductType.Name));


        }
    }
}
