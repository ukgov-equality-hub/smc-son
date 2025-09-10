
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-dr21-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "drivers_of_social_mobility"
subdomain = "educational_opportunities_and_quality_of_schooling"
indicator_name = "further_education_and_training_opportunities"
version = "3.0"

indicator_code = "DR21"



############
# IMPORTS

source("_shared.R")


###############
# THE SCRIPT

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


neet_values_for_chart = c(
  "Education and apprenticeships/WBL",
  "In employment (not in education or training)",
  "NEET",
  "Other training"
)


neet_values_for_table  = c(
  "In employment (not in education or training)",
  "Education and apprenticeships/work-based learning",
  "Other training",
  "NEET"
)

##########################################
# SECTION: By year


section_chart_type = "trend"
section_csv_name = "year"

data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "secondary_split_value",
  values_1 = sort(
    unique(data_for_section$secondary_split_value), decreasing=TRUE),
  column_2 = "primary_split_value",
  values_2 = neet_values_for_chart
) %>% mutate(
  primary_split_value = ifelse(
    primary_split_value=="Education and apprenticeships/WBL",
    "Education and apprenticeships/work-based learning",
    primary_split_value))

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
  pivot_table_columns_order_values = neet_values_for_table,
  pivot_table_column_names_suffix = " (%)"
) %>% rename(
  c("Employment (%)" = "In employment (not in education or training) (%)",
    "Education (including apprenticeships and work-based learning) (%)" = "Education and apprenticeships/work-based learning (%)",
    "Not in employment, education or training (%)" = "NEET (%)")
)

  
csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)
