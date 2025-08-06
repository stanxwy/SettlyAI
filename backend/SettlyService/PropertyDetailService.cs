using System.Runtime.CompilerServices;
using AutoMapper;
using ISettlyService;
using SettlyModels;
using SettlyModels.Dtos;


namespace SettlyService
{

    public class PropertyDetailService : IPropertyDetailService
    {
        private readonly SettlyDbContext _context;
        private readonly IMapper _mapper;

        public PropertyDetailService(SettlyDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<PropertyDetailDto> GeneratePropertyDetailAsync(int propertyId)
        {
            var property = await _context.Properties.FindAsync(propertyId);
            if (property == null)
                throw new Exception($"No property found for suburb id {propertyId}.");

            var propertyObj = new PropertyDetailDto
            {
                Id = $"{property.Id}_{DateTime.UtcNow:yyyyMMdd}",
                SuburbId = property.SuburbId,
                Address = property.Address,
                Price = property.Price,
                Bathrooms = property.Bathrooms,
                Bedrooms = property.Bathrooms,
                CarSpaces = property.CarSpaces,
                InternalArea = property.InternalArea,
                LandSize = property.LandSize,
                YearBuilt = property.YearBuilt,
                Features = property.Features,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,

            };

            return propertyObj;
        }

    }

}