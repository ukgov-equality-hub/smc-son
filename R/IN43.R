
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-in43-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "intermediate_outcomes"
subdomain = "/career_progression_(35_to_44_years)"
indicator_name = "income_progression"
version = "3.0"

indicator_code = "IN43"


############
# IMPORTS

source("_shared.R")


###############
# THE SCRIPT

## Clear output folder
unlink(output_folder, recursive=TRUE)

input_file_path = paste0(input_folder, input_file)

# Open the input file
data = read.csv(input_file_path)

# Remove some columns
data = data_frame__remove_columns(
  data,
  "variable_used",
  "age_used",
  "weight_used",
  "year_used",
  "label"
)

csv_filename = generate_csv_file_name()
save_data_frame(data, csv_filename)


##########################################
# SECTION: By socio-economic background

section_chart_type = "seb"
section_csv_name = "age-and-SEB"


data_for_section = get_data_for_chart_type(data, section_chart_type)


#################
# CHART FORMAT

for (sex  in men_women_order) {
  for (survey_year in c("2014 to 2016", "2022 to 2024"))
  {
    data_for_section_filtered = data_frame__filter(
      data_frame = data_for_section,
      column_name = "tertiary_split_value",
      values = c(sex)
    )
    
    data_for_section_filtered = data_frame__filter(
      data_frame = data_for_section_filtered,
      column_name = "fourth_split_value",
      values = c(survey_year)
    )
    
    data_for_section_filtered = data_frame__sort_rows_with_specific_values(
      data_frame = data_for_section_filtered,
      column_1 = "primary_split_value",
      values_1 = unique(data_for_section$primary_split_value, decreasing=FALSE),
      column_2 = "secondary_split_value",
      values_2 = occupational_class_order
    ) 
    
    snake_survey_year = str_replace_all(survey_year," ", "-")
    
    csv_filename = generate_csv_file_name(
      split = paste0(
        section_csv_name, "--", sex , "--", snake_survey_year),
      format = "chart")
    save_data_frame(data_for_section_filtered, csv_filename)
  }
}
  

#################
# TABLE FORMAT


pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_rows_column_name = "fourth_split_value",
  pivot_rows_column_2_name = "primary_split_value",
  pivot_columns_column_name = "secondary_split_value",
  pivot_columns_column_2_name = "tertiary_split_value",
  pivot_cells_column_name = "percentage_value",
  pivot_table_name = "Survey period",
  pivot_table_name_column_2 = "Age (years)",
  pivot_table_columns_order_values = occupational_class_order,
  pivot_table_columns_2_order_values = men_women_order,
  pivot_table_rows_order_values = c("2022 to 2024", "2014 to 2016"),
  pivot_table_rows_2_order_values = unique(data_for_section$primary_split_value, decreasing=FALSE),
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)
