
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-in22-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "intermediate_outcomes"
subdomain = "routes_into_work_(16_to_29_years)"
indicator_name = "entry_to_higher_education"
version = "3.0"

indicator_code = "IN22"



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

##########################################
# SECTION: By socio-economic background

section_chart_type = "seb"
section_csv_name = "SEB"

data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "secondary_split_value",
  values_1 = occupational_class_order,
  # column_2 = "secondary_split_value",
  # values_2 = occupational_class_order
) %>% filter(!is.na(secondary_split_value))


csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT


pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "unit",
  pivot_rows_column_name = "secondary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Socio-economic background",
  pivot_table_rows_order_values = rev(occupational_class_order),
  # pivot_table_columns_order_values = c("Percent", "lci", "uci"),
  pivot_table_column_names_suffix = " (%)"
)  %>%
  rename("Percentage (%)" = "Percent (%)")
  # rename(
  #   c("Percentage (%)" = "Percent (%)", "Lower CI" = "lci", "Upper CI" = "uci"))


csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)


##########################################
# SECTION: Time series

section_chart_type = "trend_moving_average"
section_csv_name = "moving-average"


data_for_section = get_data_for_chart_type(data, section_chart_type)

data_for_section$secondary_split_value <- replace_na(data_for_section$secondary_split_value, "Total") 

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = NULL,
  column_2 = "secondary_split_value",
  values_2 = occupational_class_order
) %>% 
  # mutate_at("primary_split_value", as.numeric) %>% 
  mutate(
    primary_split_value = as.numeric(primary_split_value),
    average_window = paste(primary_split_value - 2, primary_split_value, sep=" to "),
    )

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "secondary_split_value",
  pivot_rows_column_name = "average_window",
  pivot_cells_column_name = "value",
  pivot_table_name = "Year",
  pivot_table_rows_order_values = sort(
    unique(data_for_section$average_window), decreasing=TRUE),
  pivot_table_columns_order_values = occupational_class_order_w_total,
  pivot_table_column_names_suffix = " (%)"
)


csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)


