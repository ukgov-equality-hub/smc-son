
source("_data_frame_utils.R")
source("_pivot_table.R")

if (!require(R.utils)) {
  install.packages("R.utils")
}

# Install and load the reshape2 package if not already installed
if (!require(reshape2)) {
  install.packages("reshape2")
  library(reshape2)
}

if (!require(tidyverse)) {
  install.packages("tidyverse")
  library(tidyverse)
}

if (!require(janitor)) {
  install.packages("janitor")
  library(janitor)
}

if (!require(jsonlite)) {
  install.packages("jsonlite")
  library(jsonlite)
}

if (!require(dplyr)) {
  install.packages("dplyr")
  library(dplyr)
}


################
# STATIC DATA

timestamp = format(Sys.time(), "%Y%m%d-%H%M%S")



#####################
# SHARED FUNCTIONS

save_data_frame = function(data_frame, filename) {
  dir.create(output_folder, recursive = TRUE, showWarnings = FALSE)
  
  output_file_path = paste0(
    output_folder,
    filename
  )
  
  output_file_absolute_path = R.utils::getAbsolutePath(output_file_path)
  if (nchar(output_file_absolute_path) > 260 & Sys.info()["sysname"] != "Darwin") {
    # Get a timestamp
    temp_output_folder = paste0(
      "output", "/",
      timestamp, "/"
    )
    dir.create(temp_output_folder, recursive = TRUE, showWarnings = FALSE)

    warning(paste0("The file path is too long. Saving to ", R.utils::getAbsolutePath(temp_output_folder) ," instead"))
    output_file_path = paste0(
      temp_output_folder,
      filename
    )
  }
  
  write.csv(
    data_frame,
    file = output_file_path,
    row.names = FALSE,
    na = ""
  )
}

save_json_file = function(data_frame, filename, pretty_print, output_folder_override = NULL) {
  output_folder_to_use <- if (!is.null(output_folder_override)) {
    output_folder_override
  } else {
    output_folder
  }
  
  dir.create(output_folder_to_use, recursive = TRUE, showWarnings = FALSE)
  
  output_file_path = paste0(
    output_folder_to_use,
    filename
  )
  
  output_file_absolute_path = R.utils::getAbsolutePath(output_file_path)
  if (nchar(output_file_absolute_path) > 260 & Sys.info()["sysname"] != "Darwin") {
    # Get a timestamp
    temp_output_folder = paste0(
      "output", "/",
      timestamp, "/"
    )
    dir.create(temp_output_folder, recursive = TRUE, showWarnings = FALSE)

    warning(paste0("The file path is too long. Saving to ", R.utils::getAbsolutePath(temp_output_folder) ," instead"))
    output_file_path = paste0(
      temp_output_folder,
      filename
    )
  }
  
  write_json(
    data_frame,
    output_file_path,
    pretty = pretty_print
  )
}




#####################
# SHARED VARIABLES

