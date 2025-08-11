using System.Runtime.CompilerServices;
using AutoMapper;
using ISettlyService;
using Microsoft.EntityFrameworkCore;
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

            var query = from p in _context.Properties
                        join s in _context.Suburbs on p.SuburbId equals s.Id into ps
                        from suburb in ps.DefaultIfEmpty()
                        where p.Id == propertyId
                        select new
                        {
                            Property = p,
                            SuburbName = suburb != null ? suburb.Name : null
                        };

            var result = await query.SingleOrDefaultAsync();

            if (result == null)
                throw new KeyNotFoundException($"No property found for property id {propertyId}.");

            var propertyDto = _mapper.Map<PropertyDetailDto>(result.Property);
            propertyDto.Suburb = result.SuburbName;

            return propertyDto;
        }

    }

}