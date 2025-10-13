
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-dr51-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "drivers_of_social_mobility"
subdomain = "research_and_development_environment"
indicator_name = "broadband_speed"
version = "3.0"

indicator_code = "DR51"



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
# SECTION: By year

section_chart_type = "trend"
section_csv_name = "year-and-country"

data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = nations_order,
  column_2 = "secondary_split_value",
  values_2 = NULL
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "secondary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Year",
  pivot_table_rows_order_values = sort(
    unique(data_for_section$secondary_split_value), decreasing=TRUE),
  pivot_table_columns_order_values = nations_order,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)


#################
# FOR DRIVERS PAGE CHART

section_csv_name = "year-UKonly"

data_for_section_filtered = data_frame__filter(
  data_frame = data_for_section,
  column_name = "primary_split_value",
  values = c("United Kingdom")
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section_filtered, csv_filename)


##########################################
# SECTION: By area

section_chart_type = "geography_caterpillar"
section_csv_name = "ITL2-region"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT
  
csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "unit",
  pivot_rows_column_name = "primary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Region",
  pivot_table_column_names_suffix = " (%)"
) %>% rename("Percentage (%)" = "Percent (%)")


csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)
