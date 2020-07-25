# Build a Build Script
# One common use of bash scripts is for releasing a “build” of your source code. Sometimes your private source code may contain developer resources or private information that you don’t want to release in the published version.

# In this project, you’ll create a release script to copy certain files from a source directory into a build directory

#!/bin/bash
echo " thanks for choosing al-khan software"
firstline=$(head -n 1 source/changelog.md)  # Read the first line of this file into a variable firstline
read -a splitfirstline <<< $firstline  #Split the string firstline into the array splitfirstline.

version=${splitfirstline[1]}  # Now we are ready to set the value of the version of the script. It is located in index 1 of the array splitfirstline.

echo "the new version to be installed is: " $version
read -p "enter “1” (for yes) to continue and “0” (for no) to exit." versioncontinue

if [ $versioncontinue == 1 ]  # If the user said “1” to the continue question, we will execute the rest of our script
then 
echo "OK"

  for filename in source/*  # Now we want to copy every file from source to build except for secretinfo.md.
  do 
    if [ "$filename" == "source/secretinfo.md" ]
    then
    echo "Not copying>...." $filename
    else
    echo "Copying>....."  $filename
    cp $filename  build/.
    fi
  done
cd build # change the directory to the build directory
echo "Build version $version contains:"  # notify the user what files are currently in the build directory. Be sure to reference the version in your message.
ls
cd ..

else
echo "Please come back when you are ready."
fi


