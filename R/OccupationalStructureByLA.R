
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON26/"

input_file = "2026-01-01-census_occupation-full-dataset.csv"

output_folder_prefix = "../son/content/son"
domain = "social_mobility_by_area"
subdomain = "by_local_authority"
indicator_name = "occupational_structure"
version = "1.0"

indicator_code = "OS"


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
  "value_note"
)

data$split_order <- as.numeric(factor(data$secondary_split_value, levels = composite_index_categories_2026_order))

csv_filename = generate_csv_file_name()
save_data_frame(data, csv_filename)


##########################################
# SECTION: By country

section_chart_type = c("census_uk", "census_country")
section_csv_name = "country"

data_for_section = get_data_for_chart_type(data, section_chart_type)

time_periods_desc_order <- sort(unique(data_for_section$time_period), decreasing = TRUE)


#################
# CHART FORMAT

for (time_period in time_periods_desc_order) {
  
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "time_period",
    values = c(time_period)
  )
  
  data_for_section_filtered = data_frame__sort_rows_with_specific_values(
    data_frame = data_for_section_filtered,
    column_1 = "primary_split_value",
    values_1 = occupational_class_order,
    column_2 = "area_name",
    values_2 = nations_order_uk_first
  )
  
  snake_time_period = str_replace_all(time_period," ", "-")
  
  csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", snake_time_period), format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)
}


###################################
# CHART FORMAT (for domain page)

data_for_section_filtered = data_frame__filter(
  data_frame = data_for_section,
  column_name = "area_name",
  values = c("United Kingdom")
)

data_for_section_filtered = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section_filtered,
  column_1 = "primary_split_value",
  values_1 = occupational_class_order
)

csv_filename = generate_csv_file_name(split = "area--uk-only", format = "chart")
save_data_frame(data_for_section_filtered, csv_filename)


#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "area_name",
  pivot_rows_column_2_name = "time_period",
  pivot_cells_column_name = "value",
  pivot_table_name = "Country",
  pivot_table_name_column_2 = "Year",
  pivot_table_columns_order_values = rev_occupational_class_order,
  pivot_table_rows_order_values = c("United Kingdom", "England", "Scotland", "Wales", "Northern Ireland"),
  pivot_table_rows_2_order_values = time_periods_desc_order,
  pivot_table_column_names_suffix = " (%)"
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)


################################
# SECTION: By local authority

section_chart_type = "census_local_authority"
section_csv_name = "local-authority"

data_for_section = get_data_for_chart_type(data, section_chart_type) %>%
  filter(time_period == 2021)


#################
# CHART FORMAT

for (occupational_class in occupational_class_order) {
  
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "primary_split_value",
    values = c(occupational_class)
  )
  
  occupational_class_slug = occupational_class %>%
    str_to_lower() %>%
    str_remove_all("[[:punct:]]") %>%
    str_replace_all("\\s+", "-")
  
  csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", occupational_class_slug), format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)
}


#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "area_name",
  pivot_cells_column_name = "value",
  pivot_table_name = "Local Authority",
  pivot_table_name_column_2 = "Year",
  pivot_table_columns_order_values = occupational_class_order,
  pivot_table_rows_order_values = area_names,
  pivot_table_column_names_suffix = " (%)"
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)


#########################################
# SECTION: By local authority and year

section_chart_type = "census_local_authority"
section_csv_name = "local-authority-and-year"

data_for_section = get_data_for_chart_type(data, section_chart_type)

time_periods_desc_order <- sort(unique(data_for_section$time_period), decreasing = TRUE)
area_names <- sort(unique(data_for_section$area_name))

# Add area_slug
data_for_section$area_slug <- data_for_section$area_name %>%
  str_to_lower() %>%
  str_remove_all("[[:punct:]]") %>%
  str_replace_all("\\s+", "-")

area_names_and_slugs <- data_for_section %>%
  select(area_name, area_slug) %>%
  distinct() %>%
  arrange(area_name)
print(area_names_and_slugs)


#################
# CHART FORMAT

for (area_name in area_names) {
  
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "area_name",
    values = c(area_name)
  )
  
  data_for_section_filtered = data_frame__sort_rows_with_specific_values(
    data_frame = data_for_section_filtered,
    column_1 = "primary_split_value",
    values_1 = occupational_class_order
  )
  
  area_slug = area_name %>%
    str_to_lower() %>%
    str_remove_all("[[:punct:]]") %>%
    str_replace_all("\\s+", "-")
  
  csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", area_slug), format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)
}


#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "area_name",
  pivot_rows_column_2_name = "time_period",
  pivot_cells_column_name = "value",
  pivot_table_name = "Local Authority",
  pivot_table_name_column_2 = "Year",
  pivot_table_columns_order_values = occupational_class_order,
  pivot_table_rows_order_values = area_names,
  pivot_table_rows_2_order_values = time_periods_desc_order,
  pivot_table_column_names_suffix = " (%)"
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)

