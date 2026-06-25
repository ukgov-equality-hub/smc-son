
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/Universities/2026/"

input_file_rankings = "university_rankings_data.csv"
input_file_deciles = "university_data.csv"

output_folder = "../son/content/universities/2026/"


############
# IMPORTS

source("_shared_universities.R")


###############
# THE SCRIPT

input_file_path_rankings = paste0(input_folder, input_file_rankings)

# Open the input file
data_rankings = read.csv(input_file_path_rankings)

# Rename some columns
data_rankings = data_frame__rename_column(
  data_frame = data_rankings,
  old_column_name = 'ProviderName',
  new_column_name = 'university_name'
)
data_rankings = data_frame__rename_column(
  data_frame = data_rankings,
  old_column_name = 'rank_equal',
  new_column_name = 'equal_access_ranking'
)
data_rankings = data_frame__rename_column(
  data_frame = data_rankings,
  old_column_name = 'rank_no_location',
  new_column_name = 'social_mobility_coefficient_ranking'
)
data_rankings = data_frame__rename_column(
  data_frame = data_rankings,
  old_column_name = 'rank_location',
  new_column_name = 'social_mobility_with_location'
)


# Sort universities alphabetically by the bit of the name that's important
data_rankings$university_name_for_sorting <- data_rankings$university_name

data_rankings$university_name_for_sorting <- gsub("^The ", "", data_rankings$university_name_for_sorting)
data_rankings$university_name_for_sorting <- gsub("^University of ", "", data_rankings$university_name_for_sorting)
data_rankings$university_name_for_sorting <- gsub("^University for the ", "", data_rankings$university_name_for_sorting)
data_rankings$university_name_for_sorting <- gsub("^the ", "", data_rankings$university_name_for_sorting)

data_rankings <- data_rankings[order(data_rankings$university_name_for_sorting), ]
data_rankings$university_name_for_sorting <- NULL


# Add university_slug
data_rankings$university_slug <- data_rankings$university_name %>%
  str_to_lower() %>%
  str_remove_all("[[:punct:]]") %>%
  str_replace_all("\\s+", "-")


########################
# CREATE RANKINGS CSV

csv_filename = 'university_rankings.csv'
save_data_frame(data_rankings, csv_filename)


########################################
# CREATE RANKINGS TABLE-FORMAT TABLES

create_and_save_ranking_table_format = function(input_data_frame, rank_column, university_name_column, coefficient_column, csv_filename) {
  working_data_frame <- input_data_frame[, c(rank_column,
                                             university_name_column,
                                             coefficient_column)]
  
  # Make column names easier to read
  working_data_frame = data_frame__rename_column(
    data_frame = working_data_frame,
    old_column_name = rank_column,
    new_column_name = 'Rank'
  )
  working_data_frame = data_frame__rename_column(
    data_frame = working_data_frame,
    old_column_name = university_name_column,
    new_column_name = 'University name'
  )
  working_data_frame = data_frame__rename_column(
    data_frame = working_data_frame,
    old_column_name = coefficient_column,
    new_column_name = 'Equal access'
  )
  
  # Sort by ranking
  working_data_frame <- working_data_frame[order(working_data_frame$Rank), ]
  
  # Save CSV
  save_data_frame(working_data_frame, paste0('rankings/', csv_filename))
}

create_and_save_ranking_table_format(
  input_data_frame = data_rankings,
  rank_column = 'equal_access_ranking',
  university_name_column = 'university_name',
  coefficient_column = 'equal',
    csv_filename = 'university-rankings--equal-access--table-format.csv'
)

create_and_save_ranking_table_format(
  input_data_frame = data_rankings,
  rank_column = 'social_mobility_coefficient_ranking',
  university_name_column = 'university_name',
  coefficient_column = 'no_location',
    csv_filename = 'university-rankings--social-mobility-coefficient-without-location--table-format.csv'
)

create_and_save_ranking_table_format(
  input_data_frame = data_rankings,
  rank_column = 'social_mobility_with_location',
  university_name_column = 'university_name',
  coefficient_column = 'location',
    csv_filename = 'university-rankings--social-mobility-coefficient-with-location--table-format.csv'
)


################################
# CREATE JSON FILE FOR SEARCH

data_for_json <- data_rankings[, c("university_name", "university_slug")]

json_obj <- list(
  universities = data_for_json
)

save_json_file(json_obj, "universities.json", pretty_print = TRUE, output_folder_override = "../son/static/data/by-page/universities/")


#########################
# PROCESS DECILES DATA

input_file_path_deciles = paste0(input_folder, input_file_deciles)

# Open the input file
data_deciles = read.csv(input_file_path_deciles)

# Rename some columns
data_deciles = data_frame__rename_column(
  data_frame = data_deciles,
  old_column_name = 'provider',
  new_column_name = 'university_name'
)

# Add university_slug
data_deciles$university_slug <- data_deciles$university_name %>%
  str_to_lower() %>%
  str_remove_all("[[:punct:]]") %>%
  str_replace_all("\\s+", "-")

# Replace the values in the column "group" to make them more readable
data_deciles <- data_deciles %>%
  mutate(group = recode(group,
                        "enrolment" = "Enrolment",
                        "equal" = "Equal",
                        "required" = "Required"
  ))

# Loop through the list of universities
for (slug in unique(data_deciles$university_slug)) {
  data_deciles_by_university <- data_deciles[data_deciles$university_slug == slug, ]
  
  # WITH LOCATION WEIGHTING
  # Get the rows with location weighting
  data_deciles_by_university_with_location_weighting <- data_deciles_by_university[
    data_deciles_by_university$location_yes == 1, ]
  
  # Create the Chart Format table
  data_deciles_by_university_with_location_weighting <-
    data_deciles_by_university_with_location_weighting[, c("university_name",
                                                           "university_slug",
                                                           "group",
                                                           "decile",
                                                           "cumulative_percentage")]
  
  filename_chart_format <- paste0("by-university/", slug, "--with-location-weighting--chart-format.csv")
  save_data_frame(data_deciles_by_university_with_location_weighting, filename_chart_format)
  
  # WITHOUT LOCATION WEIGHTING
  # Get the rows without location weighting
  data_deciles_by_university_without_location_weighting <- data_deciles_by_university[
    data_deciles_by_university$location_no == 1, ]
  
  # Create the Chart Format table
  data_deciles_by_university_without_location_weighting <-
    data_deciles_by_university_without_location_weighting[, c("university_name",
                                                              "university_slug",
                                                              "group",
                                                              "decile",
                                                              "cumulative_percentage")]
  
  filename_chart_format <- paste0("by-university/", slug, "--without-location-weighting--chart-format.csv")
  save_data_frame(data_deciles_by_university_without_location_weighting, filename_chart_format)
  
  # TABLE FORMAT
  # 
  data_deciles_by_university <- data_deciles_by_university %>%
    mutate(group = case_when(
      group == "Required" & location_yes == 1 ~ "Required (with location weighting)",
      group == "Required" & location_no == 1 ~ "Required (without location weighting)",
      TRUE ~ group
    ))

  # Create the pivot table
  pivot_table = pivot_table__create(
    pivot_table_source = data_deciles_by_university,
    pivot_columns_column_name = "group",
    pivot_rows_column_name = "decile",
    pivot_cells_column_name = "cumulative_percentage",
    pivot_table_name = "Decile",
    pivot_table_rows_order_values = sort(unique(data_deciles_by_university$decile))
  )
  
  filename_table_format <- paste0("by-university/", slug, "--table-format.csv")
  save_data_frame(pivot_table, filename_table_format)
}

