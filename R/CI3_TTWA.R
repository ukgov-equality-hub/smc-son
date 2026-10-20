
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON26/"

input_file = "2026-01-01-ci3-TTWA-full-dataset_SON26.csv"

output_folder_prefix = "../son/content/son"
domain = "social_mobility_by_area"
subdomain = "by_travel_to_work_area"
indicator_name = "innovation_and_growth"
version = "1.0"

indicator_code = "CI3_TTWA"


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
  "tertiary_split_type",
  "tertiary_split_value",
  "fourth_split_type",
  "fourth_split_value",
  "lci",
  "uci",
  "sample_size",
  "value_note"
)

data$split_order <- as.numeric(factor(data$secondary_split_value, levels = composite_index_categories_2026_order))

csv_filename = generate_csv_file_name()
save_data_frame(data, csv_filename)


##########################################
# SECTION: By area

section_chart_type = "composite_index"
section_csv_name = "area"

data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)


#################
# TABLE FORMAT

data_for_section = data_for_section %>%
  mutate(value = as.character(value)) %>% 
  rename(
    c("Index of 'innovation and growth' ('Z-scores')" = "value",
      "Group" = "secondary_split_value") ) %>%
  pivot_longer(
    cols = c("Index of 'innovation and growth' ('Z-scores')", "Group"),
    names_to = "metric",
    values_to = "value")


pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "metric",
  pivot_rows_column_name = "area_name",
  pivot_cells_column_name = "value",
  pivot_table_name = "Region",
  pivot_table_columns_order_values = c("Index of 'innovation and growth' ('Z-scores')", "Group")
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)

