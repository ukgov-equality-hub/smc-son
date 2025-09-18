
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-dr34-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "drivers_of_social_mobility"
subdomain = "work_opportunities_for_young_people"
indicator_name = "labour_market_earnings_of_young_people"
version = "3.0"

indicator_code = "DR34"



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
section_csv_name = "year"

data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = NULL
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "unit",
  pivot_rows_column_name = "primary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Year",
  pivot_table_rows_order_values = sort(
    unique(data_for_section$primary_split_value), decreasing=TRUE)
)  %>%
  rename("Median hourly pay (£)" = "GBP (£)")

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)
