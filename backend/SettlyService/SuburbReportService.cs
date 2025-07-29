using Microsoft.EntityFrameworkCore;
using SettlyModels;
using SettlyModels.Dtos;
using SettlyModels.Entities;
using ISettlyService;

namespace SettlyService
{

    public class SuburbReportService : ISuburbReportService
    {
        private readonly SettlyDbContext _context;
        public SuburbReportService(SettlyDbContext context)
        {
            _context = context;
        }

        public async Task<SuburbReportDto?> GenerateSuburbReportAsync(int suburbId)
        {

            var suburb = await _context.Suburbs.FindAsync(suburbId);
            if (suburb == null) return null;


            var incomeEmployment = _context.IncomeEmployments.Where(i => i.SuburbId == suburbId).OrderByDescending(i => i.Id).FirstOrDefault();
            var housingMarket = _context.HousingMarkets.Where(i => i.SuburbId == suburbId).OrderByDescending(i => i.Id).FirstOrDefault();
            var livability = _context.Livabilities.Where(i => i.SuburbId == suburbId).OrderByDescending(i => i.Id).FirstOrDefault();
            var populationSupply = _context.PopulationSupplies.Where(i => i.SuburbId == suburbId).OrderByDescending(i => i.Id).FirstOrDefault();
            var settlyAIScore = _context.SettlyAIScores.Where(i => i.SuburbId == suburbId).OrderByDescending(i => i.Id).FirstOrDefault();
            var riskDevelopment = _context.RiskDevelopments.Where(i => i.SuburbId == suburbId).OrderByDescending(i => i.Id).FirstOrDefault();

            var report = new SuburbReportDto
            {
                Id = $"{suburb.Id}_{DateTime.UtcNow:yyyyMMdd}",
                SuburbId = suburb.Id,

                // Income and Employment
                MedianIncome = incomeEmployment?.MedianIncome ?? 0,
                EmploymentRate = incomeEmployment?.EmploymentRate ?? 0,
                WhiteCollarRatio = incomeEmployment?.WhiteCollarRatio ?? 0,
                JobGrowth = incomeEmployment?.JobGrowthRate ?? 0,

                // Property Market Insights
                MedianPrice = housingMarket?.MedianPrice ?? 0,

                PriceGrowthThreeYear = housingMarket?.PriceGrowth3Yr ?? 0,
                SalesDaysOnMarket = housingMarket?.DaysOnMarket ?? 0,
                ClearanceRate = housingMarket?.ClearanceRate ?? 0,
                RentalMarketWeeklyRent = housingMarket?.MedianRent ?? 0,
                RentGrowthTwelveMonth = housingMarket?.RentGrowth12M ?? 0,
                VacancyRate = housingMarket?.VacancyRate ?? 0,


                Population = populationSupply?.Population ?? 0,
                PopulationGrowthRate = populationSupply?.PopulationGrowthRate ?? 0,
                RentalYield = housingMarket?.RentalYield ?? 0,

                // Demand and Development
                RentersRatio = populationSupply?.RentersRatio ?? 0,
                LandSupply = populationSupply?.LandSupply ?? string.Empty,
                BuildingApprovals = populationSupply?.BuildingApprovals12M ?? 0,
                DevelopmentProjects = riskDevelopment?.DevProjectsCount ?? 0,

                // Lifestyle and Accessibility
                SupermarketDistance = livability?.DistSupermarket ?? 0,
                HospitalDistance = livability?.DistHospital ?? 0,
                TransportScore = livability?.TransportScore ?? 0,
                PrimarySchoolScore = livability?.PrimarySchoolRating ?? 0,
                SecondarySchoolScore = livability?.SecondarySchoolRating ?? 0,
                HospitalDensity = livability?.HospitalDensity ?? 0,

                // Safety and Scores
                CrimeRate = riskDevelopment?.CrimeRate ?? 0,
                AffordabilityScore = settlyAIScore?.AffordabilityScore ?? 0,
                GrowthPotential = settlyAIScore?.GrowthPotentialScore ?? 0,

                // Metadata
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            return report;
        }

    }
}