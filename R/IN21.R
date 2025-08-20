
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-in21-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "intermediate_outcomes"
subdomain = "routes_into_work_(16_to_29_years)"
indicator_name = "destinations_following_the_end_of_compulsory_full-time_education"
version = "2.0"

indicator_code = "IN21"



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
section_csv_name = "SEB"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = rev(neet_values_order),
  column_2 = "secondary_split_value",
  values_2 = occupational_class_order
) %>% filter(!is.na(secondary_split_value))


csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "secondary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Socio-economic background",
  pivot_table_rows_order_values = rev(occupational_class_order),
  pivot_table_columns_order_values = neet_values_order,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



##########################################
# SECTION: Moving average

section_chart_type = "trend_moving_average"
section_csv_name = "moving-average"

data_for_section = get_data_for_chart_type(data, section_chart_type) %>% 
  mutate(
    primary_split_value = as.numeric(primary_split_value),
    average_window = paste(primary_split_value - 2, primary_split_value, sep=" to "),
  )

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = NULL,
  column_2 = "secondary_split_value",
  values_2 = occupational_class_order
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



####################
# SECTION: By sex

section_chart_type = "sex"
section_csv_name = "SEB-and-sex"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = rev(neet_values_order),
  column_2 = "secondary_split_value",
  values_2 = occupational_class_order,
  column_3 = "tertiary_split_value",
  values_3 = men_women_order
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "secondary_split_value",
  pivot_rows_column_2_name = "tertiary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Socio-economic background",
  pivot_table_name_column_2 = "Sex",
  pivot_table_rows_order_values = rev(occupational_class_order),
  pivot_table_columns_order_values = neet_values_order,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



##########################
# SECTION: By ethnicity

section_chart_type = "ethnicity"
section_csv_name = "SEB-and-ethnicity"

rename_destination_binaries = c(
  "employment_binary"="Employment",
  "education_binary"="Education and training",
  "neet_binary"="NEET"
)

data_for_section = get_data_for_chart_type(data, section_chart_type) %>% 
  mutate(
    primary_split_type = rename_destination_binaries[primary_split_type]
  )

#################
# CHART FORMAT

for (occupational_class in occupational_class_order_two_vals) {
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "secondary_split_value",
    values = c(occupational_class)
  )
  
  data_for_section_filtered = data_frame__sort_rows_with_specific_values(
    data_frame = data_for_section_filtered,
    column_1 = "primary_split_type",
    values_1 = rev(neet_values_order),
    column_2 = "tertiary_split_value",
    values_2 = ethnicity_order,
  )
  
  snake_occupational_class = str_replace_all(str_to_lower(occupational_class)," ", "-")
  csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", snake_occupational_class), format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)
}


#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_type",
  pivot_rows_column_name = "tertiary_split_value",
  pivot_rows_column_2_name = "secondary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Ethnicity",
  pivot_table_name_column_2 = "Socio-economic background",
  pivot_table_rows_order_values = ethnicity_order,
  pivot_table_rows_2_order_values = rev(occupational_class_order_two_vals),
  pivot_table_columns_order_values = neet_values_order,
  pivot_table_column_names_suffix = " (%)"
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



###########################
# SECTION: By disability

section_chart_type = "disability"
section_csv_name = "SEB-and-disability"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = rev(neet_values_order),
  column_2 = "secondary_split_value",
  values_2 = occupational_class_order,
  column_3 = "tertiary_split_value",
  values_3 = disability_status_no_yes_order
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "secondary_split_value",
  pivot_rows_column_2_name = "tertiary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Socio-economic background",
  pivot_table_name_column_2 = "Disabled",
  pivot_table_rows_order_values = rev(occupational_class_order),
  pivot_table_rows_2_order_values = rev(disability_status_no_yes_order),
  pivot_table_columns_order_values = neet_values_order,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)

