
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/Universities/2026/"

input_file_rankings = "university_rankings_data.csv"

output_folder = "../son/content/universities/"


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


################################
# CREATE JSON FILE FOR SEARCH

data_for_json <- data_rankings[, c("university_name", "university_slug")]

json_obj <- list(
  universities = data_for_json
)

save_json_file(json_obj, "universities.json", pretty_print = TRUE, output_folder_override = "../son/static/data/by-page/universities/")

