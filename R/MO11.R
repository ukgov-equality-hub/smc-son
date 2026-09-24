
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON26/"

input_file = "2026-MO11-absolute-occupational-mobility-full-dataset.csv"

output_folder_prefix = "../son/content/son"
domain = "mobility_outcomes"
subdomain = "/occupation"
indicator_name = "absolute_occupational_mobility"
version = "2.0"

indicator_code = "MO11"


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

data_for_section$split_value <- paste(
  as.character(data_for_section$Sex),
  as.character(data_for_section$Age),
  sep = " - Aged "
)


#################
# CHART FORMAT

directions <- unique(data_for_section$Value_note)
time_periods_descending <- sort(unique(data_for_section$Time_period), decreasing = TRUE)
ages_ascending <- sort(unique(data_for_section$Age))

for (direction in directions) {
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "Value_note",
    values = c(direction)
  )
  
  data_for_section_filtered = data_frame__sort_rows_with_specific_values(
    data_frame = data_for_section_filtered,
    column_1 = "Sex",
    values_1 = men_women_order,
    column_2 = "Age",
    values_2 = ages_ascending
  ) 
  
  csv_filename = generate_csv_file_name(
    split = paste0(section_csv_name, "--", str_to_lower(direction), "-mobility"),
    format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)
}


#################
# TABLE FORMAT


pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_rows_column_name = "Value_note",
  pivot_rows_column_2_name = "Time_period",
  pivot_columns_column_name = "Sex",
  pivot_columns_column_2_name = "Age",
  pivot_cells_column_name = "Value",
  pivot_table_name = "Mobility direction",
  pivot_table_name_column_2 = "Year",
  pivot_table_columns_order_values = men_women_order,
  pivot_table_columns_2_order_values = ages_ascending,
  pivot_table_rows_order_values = c("Upward", "Downward"),
  pivot_table_rows_2_order_values = time_periods_descending,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)
