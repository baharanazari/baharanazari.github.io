using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ICE_2Generation
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        /// <summary>
        /// 
        /// </summary>
        
        private void resetButton_Click(object sender, EventArgs e)
        {
            GenerationLabel.Visible = false;
            mottoLabel.Visible = false;
            // reset the calender to todays date
            BirthDatepicker.Value = DateTime.Today;
            pictureBox1.Image = null;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // get the user 's birth day
            DateTime birthDate = BirthDatepicker.Value;
            // get the year the user was born
            int year = birthDate.Year;
            string genration, motto;
            Bitmap genrationPicture;
            // decide what year generation are 
            if (year < 1946)
            {
                genration = " Zambie";
                genrationPicture = Properties.Resources.Zombie;
                motto = " Brraaaaaains";
            }
            else if (year < 1965)
            {
                genration = " Boomer";
                genrationPicture = Properties.Resources.Oldman;
                motto = " Okay Boomer!";
            }
            else if (year < 1981)
            {
                genration = " GenX";
                genrationPicture = Properties.Resources.Ghost;
                motto = " I forgot";




            }
            else if (year < 1997)
            {
                genration = "Milenial";
                genrationPicture = Properties.Resources.OMG;
                motto = " OMG, I cant even!";


            }
            else if (year < 2013)
            {
                genration = " GenZ";
                genrationPicture = Properties.Resources.Phone;
                motto = " frr, no cap!";

            }
            else if (year < 2026)
            {
                genration = " Gen Alpha";
                genrationPicture = Properties.Resources.GenAlpha;
                motto = "Skibidi toliet";
            }
            else
            {
                genration = " Gen Beta";
                genrationPicture = Properties.Resources.GenBeta;
                motto = " Time traveler Astranoat";
            }// Update the GUI 
            GenerationLabel.Visible = true;
          GenerationLabel.Text = genration;
            mottoLabel.Visible = true;
            mottoLabel.Text = motto;
            pictureBox1.Image = genrationPicture;





        }
    }
}

