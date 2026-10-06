
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON26/"

input_file = "2026-MO32-relative-educational-mobility-full-dataset.csv"

output_folder_prefix = "../son/content/son"
domain = "mobility_outcomes"
subdomain = "/education"
indicator_name = "relative_educational_mobility"
version = "2.0"

indicator_code = "MO32"


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
# SECTION: By TODO

section_csv_name = "TODO"

data_for_section = data

data_for_section <- data_for_section[data_for_section$Sex != "Total", ]


#################
# CHART FORMAT

time_periods_descending <- sort(unique(data_for_section$Time_period), decreasing = TRUE)

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "Sex",
  values_1 = men_women_order
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)


#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_rows_column_name = "Time_period",
  pivot_columns_column_name = "Sex",
  pivot_cells_column_name = "Value",
  pivot_table_name = "Year",
  pivot_table_columns_order_values = men_women_order,
  pivot_table_rows_order_values = time_periods_descending
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)
